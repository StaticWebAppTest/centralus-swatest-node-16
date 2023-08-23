module.exports = async function (context, req) {
  const date = "2023-08-23T13:10:28.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

