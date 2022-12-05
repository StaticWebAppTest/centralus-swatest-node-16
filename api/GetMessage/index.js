module.exports = async function (context, req) {
  const date = "2022-12-05T07:09:31.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

