module.exports = async function (context, req) {
  const date = "2022-03-27T09:09:28.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

