module.exports = async function (context, req) {
  const date = "2022-12-01T10:11:52.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

