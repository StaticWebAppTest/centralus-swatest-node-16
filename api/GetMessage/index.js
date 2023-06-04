module.exports = async function (context, req) {
  const date = "2023-06-04T23:08:44.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

