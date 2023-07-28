module.exports = async function (context, req) {
  const date = "2023-07-28T07:08:08.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

