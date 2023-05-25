module.exports = async function (context, req) {
  const date = "2023-05-25T06:11:54.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

