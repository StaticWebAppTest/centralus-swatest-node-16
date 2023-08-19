module.exports = async function (context, req) {
  const date = "2023-08-19T23:07:33.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

