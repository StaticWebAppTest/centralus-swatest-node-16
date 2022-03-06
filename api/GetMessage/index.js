module.exports = async function (context, req) {
  const date = "2022-03-06T17:09:26.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

