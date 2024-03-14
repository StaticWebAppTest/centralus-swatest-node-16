module.exports = async function (context, req) {
  const date = "2024-03-14T13:10:01.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

