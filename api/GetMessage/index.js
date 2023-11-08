module.exports = async function (context, req) {
  const date = "2023-11-08T04:10:54.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

