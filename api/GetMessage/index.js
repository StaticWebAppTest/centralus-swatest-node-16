module.exports = async function (context, req) {
  const date = "2022-07-19T21:09:56.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

