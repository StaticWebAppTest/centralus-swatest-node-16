module.exports = async function (context, req) {
  const date = "2023-03-10T15:09:17.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

