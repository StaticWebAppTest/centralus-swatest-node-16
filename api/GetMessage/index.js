module.exports = async function (context, req) {
  const date = "2022-04-12T05:09:46.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

