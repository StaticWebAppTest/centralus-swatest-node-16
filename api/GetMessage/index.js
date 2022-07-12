module.exports = async function (context, req) {
  const date = "2022-07-12T05:33:25.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

