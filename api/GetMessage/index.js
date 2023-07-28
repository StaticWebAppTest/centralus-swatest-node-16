module.exports = async function (context, req) {
  const date = "2023-07-28T08:10:49.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

