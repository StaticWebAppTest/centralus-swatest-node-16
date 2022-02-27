module.exports = async function (context, req) {
  const date = "2022-02-27T11:08:51.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

