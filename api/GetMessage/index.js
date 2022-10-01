module.exports = async function (context, req) {
  const date = "2022-10-01T20:13:06.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

