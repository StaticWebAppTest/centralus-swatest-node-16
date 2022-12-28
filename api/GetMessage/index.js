module.exports = async function (context, req) {
  const date = "2022-12-28T20:09:40.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

