module.exports = async function (context, req) {
  const date = "2022-06-14T06:14:07.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

