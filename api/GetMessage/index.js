module.exports = async function (context, req) {
  const date = "2023-10-25T04:10:37.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

