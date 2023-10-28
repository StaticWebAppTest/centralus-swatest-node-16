module.exports = async function (context, req) {
  const date = "2023-10-28T01:40:06.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

