module.exports = async function (context, req) {
  const date = "2023-05-19T17:08:07.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

