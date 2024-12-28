module.exports = async function (context, req) {
  const date = "2024-12-28T08:13:40.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

