module.exports = async function (context, req) {
  const date = "2022-09-08T07:25:21.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

