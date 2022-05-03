module.exports = async function (context, req) {
  const date = "2022-05-03T13:37:17.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

