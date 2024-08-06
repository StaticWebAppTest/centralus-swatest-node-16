module.exports = async function (context, req) {
  const date = "2024-08-06T09:11:20.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

