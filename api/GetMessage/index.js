module.exports = async function (context, req) {
  const date = "2023-04-10T07:08:23.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

