module.exports = async function (context, req) {
  const date = "2022-02-23T19:08:06.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

