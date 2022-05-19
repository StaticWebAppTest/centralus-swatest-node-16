module.exports = async function (context, req) {
  const date = "2022-05-19T11:09:40.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

