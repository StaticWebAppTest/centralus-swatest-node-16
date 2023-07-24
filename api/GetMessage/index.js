module.exports = async function (context, req) {
  const date = "2023-07-24T08:12:25.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

