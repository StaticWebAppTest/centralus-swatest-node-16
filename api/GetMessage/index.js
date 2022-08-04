module.exports = async function (context, req) {
  const date = "2022-08-04T18:13:27.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

