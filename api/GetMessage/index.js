module.exports = async function (context, req) {
  const date = "2022-03-04T13:15:33.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

