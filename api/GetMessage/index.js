module.exports = async function (context, req) {
  const date = "2022-03-13T02:00:19.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

