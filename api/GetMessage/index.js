module.exports = async function (context, req) {
  const date = "2023-05-11T13:11:39.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

