module.exports = async function (context, req) {
  const date = "2022-07-14T10:13:57.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

