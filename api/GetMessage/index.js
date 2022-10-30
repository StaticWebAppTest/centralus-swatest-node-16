module.exports = async function (context, req) {
  const date = "2022-10-30T11:09:37.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

