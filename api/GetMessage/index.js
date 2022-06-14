module.exports = async function (context, req) {
  const date = "2022-06-14T11:08:52.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

