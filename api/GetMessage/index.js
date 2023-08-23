module.exports = async function (context, req) {
  const date = "2023-08-23T08:11:05.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

