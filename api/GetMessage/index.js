module.exports = async function (context, req) {
  const date = "2022-03-14T09:10:31.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

