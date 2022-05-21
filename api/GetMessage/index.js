module.exports = async function (context, req) {
  const date = "2022-05-21T00:50:23.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

