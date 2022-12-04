module.exports = async function (context, req) {
  const date = "2022-12-04T09:08:47.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

