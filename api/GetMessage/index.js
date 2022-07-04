module.exports = async function (context, req) {
  const date = "2022-07-04T21:09:08.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

