module.exports = async function (context, req) {
  const date = "2024-05-15T15:09:30.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

