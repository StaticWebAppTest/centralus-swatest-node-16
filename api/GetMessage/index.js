module.exports = async function (context, req) {
  const date = "2023-05-28T06:11:07.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

