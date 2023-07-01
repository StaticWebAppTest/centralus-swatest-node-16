module.exports = async function (context, req) {
  const date = "2023-07-01T08:11:30.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

