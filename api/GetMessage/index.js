module.exports = async function (context, req) {
  const date = "2022-10-10T11:11:31.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

