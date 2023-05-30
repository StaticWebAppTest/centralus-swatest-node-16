module.exports = async function (context, req) {
  const date = "2023-05-30T12:18:19.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

