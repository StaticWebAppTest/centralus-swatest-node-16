module.exports = async function (context, req) {
  const date = "2023-07-27T07:08:07.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

