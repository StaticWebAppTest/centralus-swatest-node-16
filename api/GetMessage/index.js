module.exports = async function (context, req) {
  const date = "2022-12-23T16:12:19.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

