module.exports = async function (context, req) {
  const date = "2022-12-06T15:10:07.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

