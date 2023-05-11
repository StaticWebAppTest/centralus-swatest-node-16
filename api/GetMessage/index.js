module.exports = async function (context, req) {
  const date = "2023-05-11T08:11:05.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

