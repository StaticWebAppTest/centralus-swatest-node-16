module.exports = async function (context, req) {
  const date = "2023-07-10T23:09:30.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

