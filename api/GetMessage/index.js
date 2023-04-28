module.exports = async function (context, req) {
  const date = "2023-04-28T05:08:32.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

